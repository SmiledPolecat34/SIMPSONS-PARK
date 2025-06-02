import 'package:flutter/material.dart';
import '../models/character.dart';

class CharacterDetailView extends StatelessWidget {
  final Character character;
  const CharacterDetailView({required this.character, super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(character.name)),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: Image.network(
                  character.imageUrl,
                  height: 250,
                  fit: BoxFit.cover,
                  ),
                ),
              ),
              const SizedBox(height: 24),
              Text(
              character.name,
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              const SizedBox(height: 12),
              Text(
              character.description,
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Colors.grey[800],
                  height: 1.4,
                ),
              ),
            ],
          ),
        )
      ),
    );
  }
}
