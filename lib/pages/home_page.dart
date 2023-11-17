/*import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final TextEditingController _controladorNome = TextEditingController();
  final TextEditingController _controladorQuantidade = TextEditingController();
  final TextEditingController _controladorValor = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Cadastrando produto'),
        ),
        body: Column(
          children: <Widget>[
            TextField(
              controller: _controladorNome,
            ),
            TextField(
              controller: _controladorQuantidade,
            ),
            TextField(
              controller: _controladorValor,
            ),
            ElevatedButton(
              onPressed: () {
                final String nome = _controladorNome.text;
                final int? quantidade =
                    int.tryParse(_controladorQuantidade.text);
                final double? valor = double.tryParse(_controladorValor.text);
              },
              child: Text("Cadastrar"),
            )
          ],
        ),
      ),
    );
  }
}*/


import 'package:flutter/material.dart';
import 'package:promocoes/core/services/auth/auth_service.dart';
import 'package:provider/provider.dart';

class ChatPage extends StatelessWidget {
  const ChatPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).primaryColor,
        //backgroundColor: Color.fromARGB(197, 255, 0, 0),
        title: const Text('Promoções'),
        actions: [
          DropdownButtonHideUnderline(
            child: DropdownButton(
              icon: Icon(
                Icons.more_vert,
                color: Colors.black,
                //color: Theme.of(context).primaryIconTheme.color,
              ),
              items: const [
                DropdownMenuItem(
                  value: 'logout',
                  child: Row(
                    children: [
                      Icon(
                        Icons.exit_to_app,
                        color: Colors.black87,
                      ),
                      SizedBox(width: 10),
                      Text('Sair'),
                    ],
                  ),
                ),
              ],
              onChanged: (value) {
                if (value == 'logout') {
                  AuthService().logout();
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}

