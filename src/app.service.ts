import { Injectable } from '@nestjs/common';
import { ReportType, data } from 'src/data';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from './dtos/report.dto';

interface Report {
  amount: number;
  source: string;
}

@Injectable()
export class AppService {
  // get all reports
  getAllIncomeReports(type: string): ReportResponseDto[] {
    const reports = data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));

    return reports;
  }

  // get single report
  getSingleReport(type: ReportType, id: string) {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) return;

    if (!report) return;

    return new ReportResponseDto(report);
  }

  // create report
  createReport(type: ReportType, { amount, source }: Report) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }
}
