import 'package:promocoes/core/models/promo_user.dart';
import 'package:promocoes/core/services/auth/auth_firebase_service.dart';

abstract class AuthService {
  PromoUser? get currentUser;

  Stream<PromoUser?> get userChanges;

  Future<void> signup(
    String name,
    String email,
    String password,
    //File? image,
  );

  Future<void> login(
    String email,
    String password,
  );

  Future<void> logout();

  factory AuthService() {
    // return AuthMockService();
    return AuthFirebaseService();
  }
}
