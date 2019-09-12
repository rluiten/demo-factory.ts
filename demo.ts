import * as Factory from 'factory.ts';

const timeStamps = Factory.Sync.makeFactory({
  createdAt: Factory.Sync.each(() => new Date()),
  updatedAt: Factory.Sync.each(() => new Date())
});

const softDelete = Factory.Sync.makeFactory({
  isDeleted: false
});

interface Post {
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export const postFactory: Factory.Sync.Factory<Post> = Factory.Sync.makeFactory({
  content: 'lorem ipsum'
})
  .combine(timeStamps)
  .combine(softDelete);


const viewType = timeStamps.combine(softDelete)
