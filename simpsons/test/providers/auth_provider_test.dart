import 'package:flutter_test/flutter_test.dart';
import 'package:simpsons/providers/auth_provider.dart';

void main() {
  group('Tests AuthProvider', () {
    test('Etat initial non authentifié', () {
      final provider = AuthProvider();
      expect(provider.isAuthenticated, false);
    });
  });
}
