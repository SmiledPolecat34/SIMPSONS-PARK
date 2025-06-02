import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'characters_page.dart';
import 'seasons_page.dart';
import 'episodes_page.dart';
import 'profile_page.dart';
import 'admin_page.dart';

import '../providers/auth_provider.dart';

class HomeView extends StatefulWidget {
  const HomeView({Key? key}) : super(key: key);
  @override
  _HomeViewState createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    final authProvider = context.watch<AuthProvider>();
    final isAdmin = authProvider.role == 'admin';

    final pages = <Widget>[
      const CharactersPage(),
      const SeasonsPage(),
      const EpisodesPage(),
      const ProfilePage(),
      if (isAdmin) const AdminPage(),
    ];

    final navItems = <BottomNavigationBarItem>[
      const BottomNavigationBarItem(icon: Icon(Icons.group), label: 'Persos'),
      const BottomNavigationBarItem(icon: Icon(Icons.calendar_today), label: 'Saisons'),
      const BottomNavigationBarItem(icon: Icon(Icons.movie), label: 'Épisodes'),
      const BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profil'),
      if (isAdmin)
        const BottomNavigationBarItem(
          icon: Icon(Icons.admin_panel_settings),
          label: 'Admin',
        ),
    ];

    if (_currentIndex >= pages.length) {
      _currentIndex = 0;
    }

    return Scaffold(
      body: pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        items: navItems,
        backgroundColor: Theme.of(context).primaryColor,
        selectedItemColor: Colors.black,
        unselectedItemColor: Colors.grey,
        onTap: (i) => setState(() => _currentIndex = i),
      ),
    );
  }
}
