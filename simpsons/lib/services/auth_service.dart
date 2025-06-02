import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../config/app_config.dart';

class AuthService {
  final _storage = const FlutterSecureStorage();

  Future<void> login(String email, String password) async {
    final resp = await http.post(
      Uri.parse('${AppConfig.apiBaseUrl}/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'email': email, 'password': password}),
    );

    print('Response status: ${resp.statusCode}');
    print('Response body: ${resp.body}');

    if (resp.statusCode == 200) {
      final data = json.decode(resp.body);
      final token = data['token'] as String;
      final user = data['user'] as Map<String, dynamic>;

      await _storage.write(key: 'jwt', value: token);
      await _storage.write(key: 'role', value: user['role'] ?? 'user');
      await _storage.write(key: 'email', value: user['email'] ?? '');
      await _storage.write(key: 'name', value: user['name'] ?? '');
    } else {
      throw Exception('Identifiants invalides');
    }
  }

  Future<void> register(String email, String password, String name) async {
    final resp = await http.post(
      Uri.parse('${AppConfig.apiBaseUrl}/auth/register'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'email': email, 'password': password, 'name': name}),
    );
    if (resp.statusCode != 201) {
      throw Exception('Échec de l’inscription');
    }
  }

  Future<String?> getToken() => _storage.read(key: 'jwt');

  Future<String?> getRole() => _storage.read(key: 'role');

  Future<void> logout() async {
    await _storage.delete(key: 'jwt');
    await _storage.delete(key: 'role');
    await _storage.delete(key: 'email');
    await _storage.delete(key: 'name');
  }
}
