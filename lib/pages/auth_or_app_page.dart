import 'package:promocoes/core/models/promo_user.dart';
import 'package:promocoes/core/services/auth/auth_service.dart';
import 'package:promocoes/pages/auth_page.dart';
import 'package:promocoes/pages/home_page.dart';
import 'package:promocoes/pages/loading_page.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';

class AuthOrAppPage extends StatelessWidget {
  const AuthOrAppPage({super.key});

  Future<void> init(BuildContext context) async {
    await Firebase.initializeApp();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: init(context),
      builder: (ctx, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const LoadingPage();
        } else {
          return StreamBuilder<PromoUser?>(
            stream: AuthService().userChanges,
            builder: (ctx, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const LoadingPage();
              } else {
                return snapshot.hasData ? ChatPage() : const AuthPage();
                //return snapshot.hasData ? const AuthPage() : HomePage();
              }
            },
          );
        }
      },
    );
  }
}
