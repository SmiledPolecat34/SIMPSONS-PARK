import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/character_provider.dart';
import '../widgets/character_tile.dart';

class CharactersPage extends StatefulWidget {
  const CharactersPage({Key? key}) : super(key: key);
  @override
  _CharactersPageState createState() => _CharactersPageState();
}

class _CharactersPageState extends State<CharactersPage> {
  @override
  void initState() {
    super.initState();
    Future.microtask(() => context.read<CharacterProvider>().loadCharacters());
  }

  @override
  Widget build(BuildContext context) {
    final prov = context.watch<CharacterProvider>();
    return Scaffold(
      appBar: AppBar(title: const Text('Personnages')),
      body: prov.loading
          ? const Center(child: CircularProgressIndicator())
          : prov.error != null
              ? Center(child: Text('Erreur : ${prov.error}'))
              : Container(
                  padding: const EdgeInsets.all(8.0),
                  child: ListView.builder(
                    itemCount: prov.list.length,
                    itemBuilder: (_, i) =>
                        CharacterTile(character: prov.list[i]),
                  ),
                ),
    );
  }
}
