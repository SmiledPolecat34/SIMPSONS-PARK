import 'package:flutter_test/flutter_test.dart';
import 'package:simpsons/providers/auth_provider.dart';

void main() {
  group('AuthProvider Tests', () {
    test('Initial state is not authenticated', () {
      final provider = AuthProvider();
      expect(provider.isAuthenticated, false);
    });
  });
}
