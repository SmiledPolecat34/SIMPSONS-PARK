import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'providers/auth_provider.dart';
import 'providers/character_provider.dart';
import 'providers/season_provider.dart';
import 'providers/episode_provider.dart';
import 'theme/app_theme.dart';
import 'views/login_view.dart';
import 'views/home_view.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => CharacterProvider()),
        ChangeNotifierProvider(create: (_) => SeasonProvider()),
        ChangeNotifierProvider(create: (_) => EpisodeProvider()),
      ],
      child: const SimpsonsParkApp(),
    ),
  );
}

class SimpsonsParkApp extends StatelessWidget {
  const SimpsonsParkApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Simpsons Park',
      theme: AppTheme.lightTheme,
      home: Consumer<AuthProvider>(
        builder: (_, auth, __) =>
            auth.isAuthenticated ? const HomeView() : const LoginView(),
      ),
    );
  }
}
