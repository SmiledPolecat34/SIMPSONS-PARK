class Character {
  final String name;
  final String imageUrl;
  final String description;

  Character({
    required this.name,
    required this.imageUrl,
    required this.description,
  });
  
  factory Character.fromJson(Map<String, dynamic> json) {
    return Character(
      name: json['name'] as String? ?? 'Unknown',
      imageUrl: json['image_url'] as String? ?? '',
      description: json['description'] as String? ?? '',
    );
  }
}
