import 'package:flutter/material.dart';
import '../models/character.dart';
import '../services/api_service.dart';

class CharacterProvider extends ChangeNotifier {
  final ApiService _api = ApiService();
  List<Character> list = [];
  bool loading = false;
  String? error;

  Future<void> loadCharacters() async {
    loading = true;
    notifyListeners();
    try {
      list = await _api.fetchCharacters();
    } catch (e) {
      error = e.toString();
    } finally {
      loading = false;
      notifyListeners();
    }
  }
}
