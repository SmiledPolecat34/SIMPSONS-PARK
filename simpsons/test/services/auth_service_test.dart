import 'package:flutter_test/flutter_test.dart';
import 'package:simpsons/services/auth_service.dart';

void main() {
  group('AuthService Tests', () {
    late AuthService auth;

    setUp(() {
      auth = AuthService();
    });

    test('AuthService instantiation', () {
      expect(auth, isA<AuthService>());
    });
  });
}
