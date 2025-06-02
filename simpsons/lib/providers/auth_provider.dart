import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../services/auth_service.dart';

class AuthProvider extends ChangeNotifier {
  final AuthService _auth = AuthService();
  final _storage = const FlutterSecureStorage();

  bool _isAuth = false;
  bool get isAuthenticated => _isAuth;

  String? _role;
  String? get role => _role;

  String? _email;
  String? get email => _email;

  String? _name;
  String? get name => _name;

  Future<void> login(String email, String password) async {
    await _auth.login(email, password);
    _isAuth = true;

    await _storage.write(key: 'email', value: email);
    await _storage.write(key: 'password', value: password);

    _role = await _auth.getRole();
    _email = email;
    _name = await _storage.read(key: 'name');

    notifyListeners();
  }

  Future<void> register(String email, String password, String name) async {
    await _auth.register(email, password, name);
    _isAuth = true;

    await _storage.write(key: 'email', value: email);
    await _storage.write(key: 'password', value: password);
    await _storage.write(key: 'name', value: name);

    _role = 'user';
    _email = email;
    _name = name;

    notifyListeners();
  }

  Future<void> logout() async {
    await _auth.logout();
    _isAuth = false;
    _role = null;
    _email = null;
    _name = null;

    await _storage.deleteAll();

    notifyListeners();
  }

  Future<void> tryAutoLogin() async {
    final email = await _storage.read(key: 'email');
    final password = await _storage.read(key: 'password');

    if (email != null && password != null) {
      try {
        await login(email, password);
      } catch (_) {
        _isAuth = false;
        _role = null;
      }
    }
  }
}
