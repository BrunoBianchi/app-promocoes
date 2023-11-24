/*import 'package:flutter/material.dart';
import 'package:promocoes/core/services/auth/auth_service.dart';
// ignore: unused_import
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
              // ignore: prefer_const_constructors
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
}*/

import 'package:flutter/material.dart';
import 'package:promocoes/core/services/auth/auth_service.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class ChatPage extends StatefulWidget {
  @override
  _ChatPageState createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;
  String filtro = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).primaryColor,
        title: Text('Promoções'),
        actions: [
          DropdownButtonHideUnderline(
            child: DropdownButton(
              // ignore: prefer_const_constructors
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
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              onChanged: (value) {
                setState(() {
                  filtro = value;
                });
              },
              decoration: InputDecoration(
                labelText: "Digite o tipo de promoção",
                hintText: "Ex: Eletrônicos",
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(
                    Radius.circular(25.0),
                  ),
                ),
              ),
            ),
          ),
          Expanded(
            child:
      StreamBuilder<QuerySnapshot>(
        stream: 
        filtro.isNotEmpty ? _firestore.collection('promocoes').where('option', isEqualTo: filtro).snapshots():
        _firestore.collection('promocoes').snapshots(),
        builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
          if (snapshot.hasError) {
            return Text('Erro: ${snapshot.error}');
          }

          if (snapshot.connectionState == ConnectionState.waiting) {
            return CircularProgressIndicator();
          }
          // ignore: unused_local_variable
          final List<DocumentSnapshot> filteredDocs = snapshot.data!.docs.where((document) {
                  Map<String, dynamic> data = document.data() as Map<String, dynamic>;
                  return data['option'].contains(filtro);
                }).toList();

          return ListView(
            children: snapshot.data!.docs.map((DocumentSnapshot document) {
              Map<String, dynamic> data = document.data() as Map<String, dynamic>;
              return Card(
                child: ListTile(
                  title: Text('Nome: ${data['name']}'),
                  subtitle: Text('Descrição: ${data['description']}\nOpção: ${data['option']}\nData de Validade: ${data['date']}'),
                ),
                    );
                  }).toList(),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}