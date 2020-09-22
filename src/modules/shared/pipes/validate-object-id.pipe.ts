import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
/* eslint-disable @typescript-eslint/no-unused-vars */
// import * as mongoose  from 'mongoose';
import mongoose from 'mongoose';

@Injectable()
export class ValidateObjectId implements PipeTransform<string> {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async transform(value: string, metadata: ArgumentMetadata) {
        //const isValid = mongoose.Types.ObjectId.isValid(value);
        //if(!isValid){
          //  throw new BadRequestException('Invalid ID!');
        //}

        console.log(mongoose.Types.ObjectId.isValid);
        return value;
    }
}