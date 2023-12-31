import 'dart:convert';
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import '/models/board.dart';

class Board_List with ChangeNotifier {
  final String? authToken;
  List<Board> _items = [];
  Board_List(this.authToken, this._items);

  List<Board> get items {
    return [..._items];
  }

  Future<void> fetchAndSetBoards() async {
    var url = Uri.parse(
        'https://chatting-test-863cb-default-rtdb.asia-southeast1.firebasedatabase.app/boards.json?auth=$authToken');
    try {
      final response = await http.get(url);
      final extractedData = json.decode(response.body) as Map<String, dynamic>;
      if (extractedData == null) {
        return;
      }

      final List<Board> loadedBoards = [];
      extractedData.forEach((boardId, boardData) {
        loadedBoards
            .add(Board(boardId.toString(), boardData['name'].toString()));
      });
      _items = loadedBoards;
      notifyListeners();
    } catch (error) {
      throw (error);
    }
  }
}
