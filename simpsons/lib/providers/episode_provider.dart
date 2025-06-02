import 'package:flutter/material.dart';
import '../models/episode.dart';
import '../services/api_service.dart';

class EpisodeProvider extends ChangeNotifier {
  final ApiService _api = ApiService();
  List<Episode> list = [];
  bool loading = false;
  String? error;

  Future<void> loadEpisodes() async {
    loading = true;
    notifyListeners();
    try {
      list = await _api.fetchEpisodes();
    } catch (e) {
      error = e.toString();
    } finally {
      loading = false;
      notifyListeners();
    }
  }

  Future<void> loadEpisodesBySeason(int seasonNumber) async {
    loading = true;
    error = null;
    notifyListeners();
    try {
      final allEpisodes = await _api.fetchEpisodes();
      list = allEpisodes
          .where((e) =>
              e.code.startsWith('S${seasonNumber.toString().padLeft(2, '0')}'))
          .toList();
    } catch (e) {
      error = e.toString();
    } finally {
      loading = false;
      notifyListeners();
    }
  }
}
