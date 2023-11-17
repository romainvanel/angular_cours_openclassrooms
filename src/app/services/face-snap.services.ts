import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap-model";

@Injectable({
    providedIn: 'root'
})


export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        {
          id: 2,
          title: 'Tiger',
          description: 'Tigre du Bengale qui nage',
          imageUrl: 'https://cdn.pixabay.com/photo/2023/10/31/23/06/tiger-8356190_960_720.jpg',
          createdDate: new Date(),
          snaps: 99,
          location: 'New dehli'
        },
        {
          id: 3,
          title: 'Forêt',
          description: 'Une route qui traverse la forêt',
          imageUrl: 'https://cdn.pixabay.com/photo/2023/11/03/11/49/autumn-8362844_960_720.jpg',
          createdDate: new Date(),
          snaps: 72
        },
        {
          id: 4,
          title: 'Oiseau',
          description: 'Une oiseau sur une branche',
          imageUrl: 'https://cdn.pixabay.com/photo/2023/11/08/23/23/common-kingfisher-8376008_960_720.jpg',
          createdDate: new Date(),
          snaps: 32
        },
        {
          id: 5,
          title: 'Nature',
          description: 'Fleurs sauvage',
          imageUrl: 'https://cdn.pixabay.com/photo/2023/11/11/08/49/high-mock-aster-8380794_960_720.jpg',
          createdDate: new Date(),
          snaps: 43
        },
        {
          id: 6,
          title: 'Food',
          description: 'Ingrédient de cuisine',
          imageUrl: 'https://media.istockphoto.com/id/1409236261/fr/photo/aliments-sains-contexte-de-saine-alimentation-fruits-l%C3%A9gumes-baies-manger-v%C3%A9g%C3%A9tarien.jpg?s=612x612&w=is&k=20&c=xTTyD-aGZjE5Jq2UqTkyecRmycNhgP_RcMvAo2h1O_s=',
          createdDate: new Date(),
          snaps: 20
        }
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps
      }


      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
          throw new Error ('FaceSnap not found');
        } else {
          return faceSnap;
        }

      }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

}    
