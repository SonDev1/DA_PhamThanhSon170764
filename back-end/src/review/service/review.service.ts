import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReviewRepository } from '../repository/review.repository';
import { CreateReviewDto } from '../dto/CreateReview.dto';
import { ObjectId } from 'mongodb';
@Injectable()
export class ReviewService {
  constructor(private reviewRepository: ReviewRepository) {}
  async createReview(createReviewDto: CreateReviewDto) {
    const userIdObjectId = new ObjectId(createReviewDto.userId);
    const productIdObjectId = new ObjectId(createReviewDto.productId);
    const data = {
      comment: createReviewDto.comment,
      rate: createReviewDto.rate,
      userId: userIdObjectId,
      productId: productIdObjectId,
    };

    const newReview = await this.reviewRepository.create(data);

    return {
      message: 'Create review success',
      review: newReview,
    };
  }

  async getReviewsByProductId(productId: string) {
    const productIdObjectId = new ObjectId(productId);
    const reviews =
      await this.reviewRepository.findReviewByProductId(productIdObjectId);
    return reviews;
  }
  async deleteReview(reviewId: string) {
    const review = await this.reviewRepository.findById(reviewId);
    if (!review) {
      throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
    }
    await this.reviewRepository.delete(reviewId);
    return {
      message: 'Delete review success',
    };
  }
  async updateReview(reviewId: string, createReviewDto: CreateReviewDto) {
    const reviewExists = await this.reviewRepository.findById(reviewId);
    if (!reviewExists) {
      throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
    }
    await this.reviewRepository.update(reviewId, createReviewDto);
    return {
      message: 'Update review success',
    };
  }
}
