
export default class tondeuse {

    constructor(coordooneeX, coordooneeY, orientation, pelouseX, pelouseY) {
        this.coordooneeX = coordooneeX;
        this.coordooneeY = coordooneeY;
        this.orientation = orientation;
        this.pelouseX = pelouseX;
        this.pelouseY = pelouseY;
    }
    
    deplacement(letter) {

        // Orientation
        // Nord
        if(this.orientation == 'N' && letter == 'R') {
            this.orientation = 'E'
        }
        else{
            if(this.orientation == 'N' && letter == 'L') {
                this.orientation = 'W'
            }
            else {
                // Sud
                if(this.orientation == 'S' && letter == 'R') {
                    this.orientation = 'W'
                }
                else {
                    if(this.orientation == 'S' && letter == 'L') {
                        this.orientation = 'E'
                    }
                    else {
                        // Est
                        if(this.orientation == 'E' && letter == 'R') {
                            this.orientation = 'S'
                        }
                        else {
                            if(this.orientation == 'E' && letter == 'L') {
                                this.orientation = 'N'
                            }
                            else {
                                // Ouest
                                if(this.orientation == 'W' && letter == 'R') {
                                    this.orientation = 'N'
                                }
                                else {
                                    if(this.orientation == 'W' && letter == 'L') {
                                        this.orientation = 'S'
                                    }
                                    else {
                
                                        // Deplacement
                                
                                        if(this.orientation == 'N' && letter == 'F' && this.coordooneeY < this.pelouseY) {
                                            this.coordooneeY += 1; 
                                        }
                                        else {
                                            if(this.orientation == 'S' && letter == 'F' && this.coordooneeY > 0) {
                                                this.coordooneeY -= 1; 
                                            }
                                            else {
                                                if(this.orientation == 'E' && letter == 'F' && this.coordooneeX < this.pelouseX) {
                                                    this.coordooneeX += 1; 
                                                }
                                                else {
                                                    if(this.orientation == 'W' && letter == 'F' && this.coordooneeX > 0) {
                                                        this.coordooneeX -= 1; 
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    
}