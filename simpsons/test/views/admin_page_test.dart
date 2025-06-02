import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/material.dart';
import 'package:simpsons/views/admin_page.dart';

void main() {
  testWidgets('AdminPage displays loading spinner initially',
      (WidgetTester tester) async {
    await tester.pumpWidget(const MaterialApp(home: AdminPage()));
    expect(find.byType(CircularProgressIndicator), findsOneWidget);
  });
}
