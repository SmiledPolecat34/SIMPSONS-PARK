import 'package:flutter/material.dart';
import '../models/episode.dart';

class EpisodeDetailPage extends StatelessWidget {
  final Episode episode;

  const EpisodeDetailPage({Key? key, required this.episode}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Les Simpsons - Épisode ${episode.number}")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(episode.title + " • " + episode.code,
                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontSize: 24,
                fontWeight: FontWeight.w600,
                color: Colors.black,
                ),
            ),
            SizedBox(height: 10),
            Text(episode.originalTitle),
            SizedBox(height: 10),
            Text(episode.description),
            SizedBox(height: 10),

          ],
        ),
      ),
    );
  }
}
