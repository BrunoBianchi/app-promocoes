import 'package:promocoes/pages/auth_or_app_page.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Promoções',
      theme: ThemeData(
        scaffoldBackgroundColor: Colors.white,
        // Altere para a cor desejada
        useMaterial3: true,
      ),
      home: AuthOrAppPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}
