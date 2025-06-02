import 'dart:convert';
import 'package:http/http.dart' as http;
import '../config/app_config.dart';
import '../models/character.dart';
import '../models/season.dart';
import '../models/episode.dart';
import 'auth_service.dart';

class ApiService {
  final AuthService _auth = AuthService();

  Future<List<Character>> fetchCharacters() async {
    final token = await _auth.getToken();
    final resp = await http.get(
      Uri.parse('${AppConfig.apiBaseUrl}/characters'),
      headers: {'Authorization': 'Bearer $token'},
    );
    if (resp.statusCode == 200) {
      final List data = json.decode(resp.body) as List;
      return data.map((e) => Character.fromJson(e)).toList();
    }
    throw Exception('Erreur personnages');
  }

  Future<List<Season>> fetchSeasons() async {
    final token = await _auth.getToken();
    final resp = await http.get(
      Uri.parse('${AppConfig.apiBaseUrl}/seasons'),
      headers: {'Authorization': 'Bearer $token'},
    );
    if (resp.statusCode == 200) {
      final List data = json.decode(resp.body) as List;
      return data.map((e) => Season.fromJson(e)).toList();
    }
    throw Exception('Erreur saisons');
  }

  Future<List<Episode>> fetchEpisodesBySeason(int seasonId) async {
    final token = await _auth.getToken();
    final resp = await http.get(
      Uri.parse('${AppConfig.apiBaseUrl}/episodes/season/$seasonId'),
      headers: {'Authorization': 'Bearer $token'},
    );
    if (resp.statusCode == 200) {
      final List data = json.decode(resp.body) as List;
      return data.map((e) => Episode.fromJson(e)).toList();
    }
    throw Exception('Erreur épisodes de la saison $seasonId');
  }

  Future<List<Episode>> fetchEpisodes() async {
    final token = await _auth.getToken();
    final resp = await http.get(
      Uri.parse('${AppConfig.apiBaseUrl}/episodes'),
      headers: {'Authorization': 'Bearer $token'},
    );
    if (resp.statusCode == 200) {
      final List data = json.decode(resp.body) as List;
      return data.map((e) => Episode.fromJson(e)).toList();
    }
    throw Exception('Erreur épisodes');
  }
}
