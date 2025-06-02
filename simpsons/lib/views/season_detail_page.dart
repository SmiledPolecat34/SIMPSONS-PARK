import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/season.dart';
import '../providers/episode_provider.dart';
import 'episode_detail.dart';

class SeasonDetailPage extends StatefulWidget {
  final Season season;
  const SeasonDetailPage({Key? key, required this.season}) : super(key: key);

  @override
  State<SeasonDetailPage> createState() => _SeasonDetailPageState();
}

class _SeasonDetailPageState extends State<SeasonDetailPage> {
  @override
  void initState() {
    super.initState();
    Future.microtask(() {
      context
          .read<EpisodeProvider>()
          .loadEpisodesBySeason(widget.season.number);
    });
  }

  @override
  Widget build(BuildContext context) {
    final epProv = context.watch<EpisodeProvider>();

    return Scaffold(
      appBar: AppBar(title: Text(widget.season.title)),
      body: epProv.loading
          ? const Center(child: CircularProgressIndicator())
          : epProv.error != null
              ? Center(child: Text('Erreur : ${epProv.error}'))
              : ListView.builder(
                  itemCount: epProv.list.length,
                  itemBuilder: (context, i) {
                    final ep = epProv.list[i];
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
