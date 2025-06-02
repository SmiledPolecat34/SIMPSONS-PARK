import 'package:flutter_test/flutter_test.dart';
import 'package:simpsons/services/api_service.dart';

void main() {
  group('ApiService', () {
    test('ApiService can be instantiated', () {
      final api = ApiService();
      expect(api, isA<ApiService>());
    });
  });
}
