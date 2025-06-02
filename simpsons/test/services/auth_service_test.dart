import 'package:flutter_test/flutter_test.dart';
import 'package:simpsons/services/auth_service.dart';

void main() {
  group('AuthService Tests', () {
    late AuthService auth;

    setUp(() {
      auth = AuthService();
    });

    test('Login with wrong credentials throws error', () async {
      expect(
        () async => await auth.login('wrong@mail.com', 'badpass'),
        throwsException,
      );
    });

    test('Register with valid inputs does not throw', () async {
      expectLater(
        () async => await auth.register('test@mail.com', 'Passw0rd!', 'Test'),
        returnsNormally,
      );
    });
  });
}
