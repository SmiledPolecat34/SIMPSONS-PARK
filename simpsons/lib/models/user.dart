class User {
  final String id;
  String email;

  User({
    required this.id,
    required this.email,
  });

  bool isValidEmail() {
    final regex = RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$');
    return regex.hasMatch(email);
  }
}
