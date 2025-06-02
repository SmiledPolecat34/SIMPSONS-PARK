import 'package:flutter/material.dart';
import '../models/season.dart';
import '../services/api_service.dart';

class SeasonProvider extends ChangeNotifier {
  final ApiService _api = ApiService();
  List<Season> list = [];
  bool loading = false;
  String? error;

  Future<void> loadSeasons() async {
    loading = true;
    notifyListeners();
    try {
      list = await _api.fetchSeasons();
    } catch (e) {
      error = e.toString();
    } finally {
      loading = false;
      notifyListeners();
    }
  }
}
