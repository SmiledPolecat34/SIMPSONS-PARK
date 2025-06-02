import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/season_provider.dart';
import 'season_detail_page.dart';

class SeasonsPage extends StatefulWidget {
  const SeasonsPage({Key? key}) : super(key: key);
  @override
  _SeasonsPageState createState() => _SeasonsPageState();
}

class _SeasonsPageState extends State<SeasonsPage> {
  @override
  void initState() {
    super.initState();
    Future.microtask(() => context.read<SeasonProvider>().loadSeasons());
  }

  void _onSeasonTap(season) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => SeasonDetailPage(season: season),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final prov = context.watch<SeasonProvider>();
    return Scaffold(
        appBar: AppBar(title: const Text('Saisons')),
        body: prov.loading
            ? const Center(child: CircularProgressIndicator())
            : prov.error != null
                ? Center(
                    child: Text(
                      'Erreur : ${prov.error}',
                      style: const TextStyle(color: Colors.red, fontSize: 18),
                    ),
                  )
                : Container(
                    padding: const EdgeInsets.all(8.0),
                    child: ListView.builder(
                      itemCount: prov.list.length,
                      itemBuilder: (context, i) {
                        final s = prov.list[i];
                        return Card(
                          margin: const EdgeInsets.symmetric(
                              horizontal: 12, vertical: 6),
                          elevation: 0,
                          child: ListTile(
                            contentPadding: const EdgeInsets.symmetric(
                                horizontal: 16, vertical: 10),
                            leading: CircleAvatar(
                              backgroundColor: Colors.yellow,
                              child: Text(
                                '${s.number}',
                                style: const TextStyle(
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold),
                              ),
                            ),
                            title: Text(
                              s.title,
                              style: const TextStyle(
                                  fontWeight: FontWeight.w600, fontSize: 18),
                            ),
                            trailing: const Icon(Icons.arrow_forward_ios,
                                size: 18, color: Colors.grey),
                            onTap: () => _onSeasonTap(s),
                          ),
                        );
                      },
                    ),
                  ));
  }
}
