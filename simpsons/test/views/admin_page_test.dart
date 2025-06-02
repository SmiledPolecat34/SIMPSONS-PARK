import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:simpsons/views/admin_page.dart';

void main() {
  testWidgets('AdminPage montre un CircularProgressIndicator au chargement',
      (WidgetTester tester) async {
    await tester.pumpWidget(const MaterialApp(home: AdminPage()));
    expect(find.byType(CircularProgressIndicator), findsOneWidget);
  });
}
