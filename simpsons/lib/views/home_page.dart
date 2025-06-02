import 'package:flutter/material.dart';
import '../services/api_service.dart';
import '../models/season.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final ApiService _apiService = ApiService();
  List<Season> _seasons = [];
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    loadSeasons();
  }

  Future<void> loadSeasons() async {
    try {
      final data = await _apiService.fetchSeasons();
      setState(() {
        _seasons = data;
        _isLoading = false;
      });
    } catch (e) {
      setState(() {
        _error = e.toString();
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) return const Center(child: CircularProgressIndicator());
    if (_error != null) return Center(child: Text('Erreur : $_error'));
    if (_seasons.isEmpty) return const Center(child: Text('Aucune saisons trouvée.'));

    return Scaffold(
      appBar: AppBar(title: const Text('Accueil')),
      body: Stack(
        children: [
          ListView.builder(
            itemCount: _seasons.length,
            itemBuilder: (context, index) {
              final season = _seasons[index];
              return ListTile(
                title: Text('Saison ${season.number}'),
                onTap: () {
                  Navigator.pushNamed(
                    context,
                    '/season',
                    arguments: season,
                  );
                },
              );
            },
          ),
        ],
      ),
    );
  }
}
