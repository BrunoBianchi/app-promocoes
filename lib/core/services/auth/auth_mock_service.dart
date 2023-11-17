//import 'dart:io';
import 'dart:async';
import 'dart:math';
import 'package:promocoes/core/models/promo_user.dart';
import 'package:promocoes/core/services/auth/auth_service.dart';

class AuthMockService implements AuthService {
  static const _defaultUser = PromoUser(
    id: '456',
    name: 'Ana',
    email: 'ana@cod3r.com.br',
    //imageURL: 'assets/images/avatar.png',
  );

  static final Map<String, PromoUser> _users = {
    _defaultUser.email: _defaultUser,
  };
  static PromoUser? _currentUser;
  static MultiStreamController<PromoUser?>? _controller;
  static final _userStream = Stream<PromoUser?>.multi((controller) {
    _controller = controller;
    _updateUser(_defaultUser);
  });

  @override
  PromoUser? get currentUser {
    return _currentUser;
  }

  @override
  Stream<PromoUser?> get userChanges {
    return _userStream;
  }

  @override
  Future<void> signup(
    String name,
    String email,
    String password,
    //File? image,
  ) async {
    final newUser = PromoUser(
      id: Random().nextDouble().toString(),
      name: name,
      email: email,
      //imageURL: image?.path ?? 'assets/images/avatar.png',
    );

    _users.putIfAbsent(email, () => newUser);
    _updateUser(newUser);
  }

  @override
  Future<void> login(String email, String password) async {
    _updateUser(_users[email]);
  }

  @override
  Future<void> logout() async {
    _updateUser(null);
  }

  static void _updateUser(PromoUser? user) {
    _currentUser = user;
    _controller?.add(_currentUser);
  }
}
