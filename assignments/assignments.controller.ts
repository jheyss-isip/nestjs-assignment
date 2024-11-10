import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: number): { sequence: number[] } {
    const sequence = this.generateFibonacci(Number(n));
    return { sequence };
  }

  private generateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }

  @Get('prime/:number')
  checkPrime(@Param('number') number: number): { isPrime: boolean } {
    const isPrime = this.isPrime(Number(number));
    return { isPrime };
  }

  private isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
  }

  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: number): { factorial: number } {
    const factorial = this.getFactorial(Number(number));
    return { factorial };
  }

  private getFactorial(number: number): number {
    if (number < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }
    if (number === 0 || number === 1) return 1;

    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}
