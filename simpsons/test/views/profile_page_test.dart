import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:simpsons/views/profile_page.dart';
import 'package:simpsons/providers/auth_provider.dart';
import 'package:provider/provider.dart';

void main() {
  testWidgets('ProfilePage shows default info when not authenticated',
      (WidgetTester tester) async {
    await tester.pumpWidget(
      ChangeNotifierProvider(
        create: (_) => AuthProvider(),
        child: const MaterialApp(home: ProfilePage()),
      ),
    );

    expect(find.text("Aucun utilisateur connecté."), findsOneWidget);
  });
}
