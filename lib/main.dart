import 'package:flutter/material.dart';
void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MedicalDef',
        theme: ThemeData(
        fontFamily: 'Montserrat',),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Medical Def'),
        ),
        body: BodyListView(),
      ),
    );
  }
}


class BodyListView extends StatelessWidget {
@override
  Widget build (BuildContext context){
    return _myListView();
  }
}

Widget _myListView(){
  final List<String> items = List<String>.generate(9999, (i) => 'Item $i');
  return ListView.builder(
      itemCount: items.length,
      // padding: EdgeInsets.all(0.0),
      itemExtent: 490,
      itemBuilder: (context, index ){
        return Column(

          children: <Widget>[
           Expanded(
             flex: 2,
             child: Stack(
              alignment: Alignment.topCenter,
              children: <Widget>[
                Container(
                  // color: Colors.grey[1],
                  color: Colors.grey[10],
                  width: 480.0,
                  height: 450.0,
                ),
               Image(
                  image: NetworkImage('https://cf.bstatic.com/xdata/images/hotel/max1280x900/251843487.jpg?k=2b874a9a20c8910192e17ce40ea8f12131019c26750f858d1149f365d28c5005&o=&hp=1'),
                ),

        Positioned(
bottom: 30,
        child:Card(
          shadowColor: Colors.grey,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15),
          ),
          child: Expanded(
            flex: 9,
                    child: SizedBox(
                      width: 400,
                      height: 206,
                      child:Container(
                        child: Column(
                          children: <Widget>[
                         Row(
                        children: <Widget>[
                          SizedBox(height: 20),
                            Container(
                              child: Text(
                                'Название отеля',
                                style: TextStyle(fontSize:18,color: Color(0xff353b47)),
                              ),
                              alignment: Alignment.topLeft,
                            ),
                            ],
                        ),
                            Container(
                              child: Row(
                                children: <Widget>[
                                  Icon(Icons.map_outlined,color:  const Color(0xff7f8fa6),),
                                  Text(
                                    //местоположение отеля
                                    'улица Белинского 19б Херсон, 73000, Украина',
                                    style: TextStyle(fontSize:13,color: Color(0xff7f8fa6)),
                                  ),
                                ],
                              ),
                              alignment: Alignment.centerLeft,
                            ),
                            Container(
                              child: Row(
                                children: <Widget>[
                                  Icon(Icons.monetization_on_outlined,color:  const Color(0xff7f8fa6),),
                                  Text(
                                    //минимальная цена за ночь в отеле
                                    'Минимальная цена: UAH 935',
                                    style: TextStyle(fontSize:13,color: Color(0xff7f8fa6)),
                                  ),
                                ],
                              ),
                              alignment: Alignment.topLeft,
                            ),
                            Row(
                              children: <Widget>[
                                IconButton(
                                  icon: const Icon(Icons.alt_route),
                                  color:  const Color(0xff7f8fa6),
                                  onPressed: () {},
                                ),
                                IconButton(
                                  icon: const Icon(Icons.share),
                                  color:  const Color(0xff7f8fa6),
                                  onPressed: () {},
                                ),
                              ],

                            ),
                            TextButton(
                              style: TextButton.styleFrom(
                                textStyle: const TextStyle(fontSize:15),
                                primary: Color(0xff7f8fa6),
                              ),
                              onPressed: () {
                                // Navigator.push(
                                //   context,
                                //   MaterialPageRoute(builder: (context) => SecondRoute()),
                                // );
                              },
                              child: Text('Апарт-отель «Raziotel Ришельевский Херсон» с бесплатной частной парковкой расположен в Херсоне, Херсонская область. В номерах...\n',style: TextStyle(fontFamily: 'Montserrat'),),
                            ),
                          ],
                        ),
                        alignment: Alignment.bottomLeft,
                      ),
                    ),
                ),
        ),
        ),
                Positioned(
                  top: 15,
                  right:10 ,
                  child:  IconButton(
                    icon: const Icon(Icons.star_border,),
                    color: Colors.grey[600],
                    onPressed: () {},
                  ),
                  ),
                // size: 40.0,
              ],
              overflow: Overflow.visible,
          ),
           ),
      ],
        );
      }
  );
}
