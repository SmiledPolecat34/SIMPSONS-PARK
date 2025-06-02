class Episode {
  final String id;
  final int number;
  final String code;
  final String title;
  final String originalTitle;
  final String description;
  final String date_usa;

  Episode({
    required this.id,
    required this.number,
    required this.code,
    required this.title,
    required this.originalTitle,
    required this.description,
    required this.date_usa,
  });

  factory Episode.fromJson(Map<String, dynamic> json) {
    return Episode(
      id: json['_id'] as String,
      number: json['number'] as int? ?? 0,
      code: json['code'] as String? ?? 'Code inconnu',
      title: json['title'] as String? ?? 'Titre inconnu',
      originalTitle: json['original_title'] as String? ?? 'Titre original inconnu',
      description: json['description'] as String? ?? 'Description inconnue',
      date_usa: json['date_usa'] as String? ?? 'Date inconnue',
    );
  }
}
