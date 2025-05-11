import { Point } from "../map/map.component"

export interface Line {
  a: Point,
  b: Point,
  name?: string
  color?: string
}


export const lines: Line[] = [
  {
    a: {
      x: 904,
      y: 104,
    },
    b: {
      x: 800,
      y: 0,
    },
    name: 'Mike\'s Base - X (Diagonal)'
  },
  {
    a: {
      x: 760,
      y: 168,
    },
    b: {
        x: 760,
        y: 0,
    },
    color: 'grey',
    name: 'Dungeon B - X'
  },
  {
    a: {
      x: 760,
      y: 168,
    },
    b: {
        x: 592,
        y: 0,
    },
    name: 'Dungeon B - X (Diagonal)'
  },
  {
    a: {
      x: -4400, y: 0,
    },
    b: { x: -4400, y: 2000},
    color: 'grey'
  },
  {
    a: {
      x: 0, y: 0,
    },
    b: { x: -2800, y: 2800}
  },
  {
    a: {
      x: -2000, y: 2000,
    },
    b: { x: -5120, y: 2000}
  },
  {
    a: {
      x: 1160,
      y: -1160,
    },
    b: {
      x: 0,
      y: 0,
    },
    name: 'Stronghold - Spawn P1',
  },
  {
    a: {
      x: 1160,
      y: -1400,
    },
    b: {
      x: 1160,
      y: -1160,
    },
    name: 'Stronghold - Spawn P2'
  },
  {
    a: {
      x: 1160,
      y: -1160,
    },
    b: {
      x: 1160,
      y: 0,
    },
    name: 'Stroghold - X',
    color: 'grey'
  },
  {
    a: {
      x: 1160,
      y: -1400,
    },
    b: {
      x: 0,
      y: -1400,
    },
    color: 'grey',
    name: 'Stronghold - Y'
  },
  {
    a: {
      x: 904,
      y: 104,
    },
    b: {
      x: 904,
      y: 0,
    },
    color: 'grey',
    name: 'Mike\'s Base - X'
  },
  {
    a: {
      x: -216,
      y: 48,
    },
    b: {
      x: -216,
      y: 0,
    }
  },
  {
    a: {
      x: -448,
      y: -2024,
    },
    b: {
      x: 0,
      y: -2024,
    }
  },
  {
    a: {
      x: -544,
      y: 480,
    },
    b: {
      x: -544,
      y: 0,
    },
    color: 'grey'
  },
  {
    a: {
      x: -544,
      y: 480,
    },
    b: {
      x: -480,
      y: 480
    }
  },
  {
    a: {
      x: -5920,
      y: 2800,
    },
    b: {
      x: -2800,
      y: 2800,
    },
    color: 'grey',
    name: 'Fortress B - Y (old)'
  }, {
    a: {
      x: -5920,
      y: 2800,
    },
    b: {
      x: -5920,
      y: 0,
    },
    color: 'grey'
  },
  {
    a: {
      x: -5920,
      y: 2800,
    },
    b: {
      x: -5120,
      y: 2000,
    }
  },
  {
    a: {
      x: 2200,
      y: -240,
    },
    b: {
      x: 2200,
      y: 0,
    },
    color: 'grey',
    name: 'Underwater temple - X'
  },
  {
    a: {
      x: 2200,
      y: -240,
    },
    b: {
      x: 1960,
      y: 0,
    },
    name: 'Underwater temple - X (Diagonal)'
  },
  {
    a: {
      x: 2760,
      y: 560,
    },
    b: {
      x: 2200,
      y: 0,
    },
    name: 'Creeper Farm - X (Diagonal)',
  },
  {
    a: {
      x: 2760,
      y: 560,
    },
    b: {
      x: 2760,
      y: 0,
    },
    color: 'grey',
    name: 'Creeper Farm - X',
  },
  {
    a: {
      x: 240,
      y: 200,
    },
    b: {
      x: 240,
      y: 0,
    },
    color: 'grey',
    name: 'Trial A - X'
  },
  {
    a: {
      x: 360,
      y: 360,
    },
    b: {
      x: 0,
      y: 0,
    },
    name: 'Trial A - Spawn P1'
  },
  {
    a: {
      x: 240,
      y: 240,
    },
    b: {
      x: 240,
      y: 200,
    },
    name: 'Trial A - Spawn P2'
  },
  {
    a: {
      x: 240,
      y: 240
    },
    b: {
      x: 240,
      y: 360
    }
  }
]