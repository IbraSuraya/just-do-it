import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  // const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Suraya Demo',
      theme: ThemeData(
        // primarySwatch: Colors.deepPurple,
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.orangeAccent),
        useMaterial3: true,
      ),
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.secondaryContainer,
          title: const Text("Hello Deep"),
          actions: [
            IconButton(
              icon: const Icon(
                Icons.search,
                color: Colors.red,
              ),
              onPressed: () {},
            ),
          ],
          leading: IconButton(
            icon: const Icon(
              Icons.menu,
              color: Colors.red,
            ),
            onPressed: () {},
          ),
        ),
        body: const Center(
          // child: Heading(text: "Body Purple"),
          child: BiggerText(text: "Uji Coba"),
        ),
        floatingActionButton: FloatingActionButton(
          child: const Icon(Icons.add),
          onPressed: () {},
        ),
      ),
    );
  }
}

class Heading extends StatelessWidget {
  final String text;

  const Heading({Key? key, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: const TextStyle(
        fontSize: 24.0,
        fontWeight: FontWeight.bold,
      ),
    );
  }
}

class BiggerText extends StatefulWidget {
  final String text;
  const BiggerText({Key? key, required this.text}) : super(key: key);
  @override
  // ignore: library_private_types_in_public_api
  _BiggerTextState createState() => _BiggerTextState();
}

class _BiggerTextState extends State<BiggerText> {
  double _textSize = 16.0;
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(widget.text, style: TextStyle(fontSize: _textSize)),
        ElevatedButton(
          child: const Text("Perbesar"),
          onPressed: () {
            setState(() {
              _textSize = _textSize + 5;
            });
          },
        ),
        ElevatedButton(
          child: const Text("Perkecil"),
          onPressed: () {
            setState(() {
              if(_textSize >= 16.0){
                _textSize = _textSize - 5;
              } 
            });
          }
        ,)
      ],
    );
  }
}
