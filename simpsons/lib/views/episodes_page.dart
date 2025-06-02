import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/episode_provider.dart';
import 'episode_detail.dart';

class EpisodesPage extends StatefulWidget {
  const EpisodesPage({Key? key}) : super(key: key);
  @override
  _EpisodesPageState createState() => _EpisodesPageState();
}

class _EpisodesPageState extends State<EpisodesPage> {
  @override
  void initState() {
    super.initState();
    Future.microtask(() => context.read<EpisodeProvider>().loadEpisodes());
  }

  @override
  Widget build(BuildContext context) {
    final prov = context.watch<EpisodeProvider>();

    return Scaffold(
      appBar: AppBar(title: const Text('Épisodes')),
      body: prov.loading
          ? const Center(child: CircularProgressIndicator())
          : prov.error != null
              ? Center(child: Text('Erreur : ${prov.error}'))
              : ListView.builder(
                  itemCount: prov.list.length,
                  itemBuilder: (context, i) {
                    final ep = prov.list[i];
                    return ListTile(
                      leading: CircleAvatar(
                        backgroundColor: Colors.yellow,
                        child: Text(
                          '${ep.number}',
                          style: const TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      title: Text(
                        ep.title,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                        ),
                      ),
                      subtitle: Padding(
                        padding: const EdgeInsets.only(top: 4.0),
                        child: Text(
                          ep.originalTitle,
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            color: Colors.grey[700],
                            fontSize: 14,
                          ),
                        ),
                      ),
                      trailing: Text(ep.code),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (_) => EpisodeDetailPage(episode: ep),
                          ),
                        );
                      },
                    );
                  },
                ),
    );
  }
}
