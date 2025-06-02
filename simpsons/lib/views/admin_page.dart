import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class AdminPage extends StatefulWidget {
  const AdminPage({Key? key}) : super(key: key);

  @override
  State<AdminPage> createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> {
  List<dynamic> users = [];
  bool isLoading = true;
  final String baseUrl = 'http://localhost:3000/api/users';
  // final String baseUrl = 'http://192.168.1.22:3000/api/users';

  @override
  void initState() {
    super.initState();
    fetchUsers();
  }

  Future<void> fetchUsers() async {
    setState(() => isLoading = true);
    try {
      final res = await http.get(Uri.parse(baseUrl));
      if (res.statusCode == 200) {
        setState(() {
          users = json.decode(res.body);
          isLoading = false;
        });
      } else {
        throw Exception('Échec du chargement');
      }
    } catch (e) {
      print(e);
      setState(() => isLoading = false);
    }
  }

  Future<void> deleteUser(String id) async {
    final res = await http.delete(Uri.parse('$baseUrl/$id'));
    if (res.statusCode == 200) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Utilisateur supprimé')),
      );
      fetchUsers();
    }
  }

  Future<void> updateUser(
      String id, String email, String name, String role) async {
    final res = await http.put(
      Uri.parse('$baseUrl/$id'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({
        'email': email,
        'name': name,
        'role': role,
      }),
    );

    if (res.statusCode == 200) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Utilisateur modifié')),
      );
      fetchUsers();
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Erreur de modification')),
      );
    }
  }

  void showEditDialog(
      String id, String currentEmail, String currentName, String currentRole) {
    final emailController = TextEditingController(text: currentEmail);
    final nameController = TextEditingController(text: currentName);
    String selectedRole = currentRole.isNotEmpty ? currentRole : 'user';

    showDialog(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, setState) => AlertDialog(
          title: Text('Modifier l\'utilisateur'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextField(
                  controller: emailController,
                  decoration: InputDecoration(labelText: 'Email'),
                ),
                TextField(
                  controller: nameController,
                  decoration: InputDecoration(labelText: 'Nom'),
                ),
                SizedBox(height: 12),
                DropdownButtonFormField<String>(
                  value: selectedRole,
                  items: ['user', 'admin']
                      .map((role) => DropdownMenuItem(
                            value: role,
                            child: Text(role),
                          ))
                      .toList(),
                  onChanged: (value) {
                    if (value != null) {
                      setState(() {
                        selectedRole = value;
                      });
                    }
                  },
                  decoration: InputDecoration(labelText: 'Rôle'),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('Annuler'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
                updateUser(
                  id,
                  emailController.text.trim(),
                  nameController.text.trim(),
                  selectedRole,
                );
              },
              child: Text('Sauvegarder'),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Admin - Utilisateurs')),
      body: isLoading
          ? Center(child: CircularProgressIndicator())
          : ListView.builder(
              itemCount: users.length,
              itemBuilder: (_, i) {
                final user = users[i];
                return ListTile(
                  title: Text(user['email'] ?? ''),
                  subtitle:
                      Text('${user['name'] ?? ''} - ${user['role'] ?? 'user'}'),
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        icon: Icon(Icons.edit, color: Colors.blue),
                        onPressed: () => showEditDialog(
                          user['_id'],
                          user['email'] ?? '',
                          user['name'] ?? '',
                          user['role'] ?? 'user',
                        ),
                      ),
                      IconButton(
                        icon: Icon(Icons.delete, color: Colors.red),
                        onPressed: () => deleteUser(user['_id']),
                      ),
                    ],
                  ),
                );
              },
            ),
    );
  }
}
