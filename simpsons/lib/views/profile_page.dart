import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import 'login_view.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    final theme = Theme.of(context);

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: const Text('Mon Profil'),
        backgroundColor: theme.primaryColor,
      ),
      body: auth.isAuthenticated
          ? Center(
              child: Padding(
                padding: const EdgeInsets.all(24.0),
                child: Container(
                  width: double.infinity,
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      ClipOval(
                        child: Image.asset(
                          'images/simpsons_logo.png',
                          height: 100,
                          width: 100,
                          fit: BoxFit.cover,
                        ),
                      ),
                      const SizedBox(height: 24),
                      Text(
                        auth.name ?? 'Nom inconnu',
                        style: theme.textTheme.titleLarge?.copyWith(
                          color: Colors.black87,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.email, color: Colors.grey),
                          const SizedBox(width: 8),
                          Text(
                            auth.email ?? 'Email inconnu',
                            style: theme.textTheme.bodyMedium?.copyWith(
                              color: Colors.black54,
                            ),
                          ),
                          const SizedBox(width: 8),
                          Chip(
                            label: Text(
                              auth.role?.toUpperCase() ?? 'UTILISATEUR',
                              style: const TextStyle(color: Colors.black),
                            ),
                            backgroundColor: theme.primaryColor,
                            padding: const EdgeInsets.symmetric(
                                horizontal: 12, vertical: 4),
                          ),
                        ],
                      ),
                      const SizedBox(height: 30),
                      TextButton(
                          onPressed: () async {
                            await auth.logout();
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (_) => const LoginView()),
                            );
                          },
                          style: TextButton.styleFrom(
                            minimumSize: const Size.fromHeight(58),
                            backgroundColor: Colors.yellow,
                            foregroundColor: Colors.black,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10),
                            ),
                          ),
                          child: const Text('Se déconnecter',
                              style: TextStyle(fontSize: 16))),
                    ],
                  ),
                ),
              ),
            )
          : const Center(child: Text("Aucun utilisateur connecté.")),
    );
  }
}
