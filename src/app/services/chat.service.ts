import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatI } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatsCollection: AngularFirestoreCollection<ChatI>;
  private chats: Observable<ChatI[]>;

  chat: ChatI = {
    clienteId: '',
    uid: '',
    descripcion: ''
  }

  constructor(private db:AngularFirestore) { }

  getChats(clienteId: string, uid: string){
    this.chatsCollection = this.db.collection<ChatI>('chat', ref => 
    ref.where("clienteId","==",clienteId).where("uid","==",uid));
    this.chats = this.chatsCollection.snapshotChanges().pipe(map
      (actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    return this.chats;
  }
}
