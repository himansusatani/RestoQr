import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSignalrServiceTsService {
  private hubConnection!: signalR.HubConnection;
  private orderReceivedSubject = new Subject<any[]>();  // Subject to emit new orders

  public orderReceived$ = this.orderReceivedSubject.asObservable();  // Observable to subscribe to the new orders

  constructor() { }

  // Start the SignalR connection
  startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('http://192.168.0.15:5000/OrderHub', {
        withCredentials: true  // Ensure credentials (cookies/tokens) are included
    })
    .withAutomaticReconnect()
    .build();


    // Start the connection
    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR connected');
      })
      .catch(err => {
        console.error('SignalR connection error:', err);
      });

    // Listening for "ReceiveOrderUpdate" events from the server
    this.hubConnection.on('ReceiveOrderUpdate', (orders: any[]) => {
      console.log('New order received via SignalR:', orders);
      this.orderReceivedSubject.next(orders);  // Emit new orders to subscribers
    });

    // Handling connection state events
    this.hubConnection.onreconnected(() => {
      console.log('SignalR connection reconnected');
    });

    this.hubConnection.onclose((error) => {
      if (error) {
        console.error('SignalR connection closed with error:', error);
      } else {
        console.log('SignalR connection closed');
      }
    });
  }

  // Stop the SignalR connection
  stopConnection(): void {
    if (this.hubConnection) {
      this.hubConnection.stop()
        .then(() => console.log('SignalR connection stopped'))
        .catch(err => console.error('Error stopping SignalR connection:', err));
    }
  }
}
