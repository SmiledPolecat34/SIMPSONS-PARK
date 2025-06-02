class Season {
  final String id;
  final int number;
  final String title;

  Season({
    required this.id,
    required this.number,
    required this.title,
  });

  factory Season.fromJson(Map<String, dynamic> json) {
    return Season(
      id: json['_id'] as String,
      number: json['season'] as int,
      title: json['title'] as String,
    );
  }
}
