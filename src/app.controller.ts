import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from './data';
// import { AppService } from './app.service';

@Controller('income/:type')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // get all report
  @Get()
  getAllReports(@Param('type') type: string) {
    // console.log(type);
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report.filter((report) => report.type === reportType);
  }

  // get single report
  @Get(':id')
  getSingleReport(@Param('type') type: string, @Param('id') id: string) {
    // console.log({ type, id });
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((item) => item.id === id);
  }

  // create report
  @Post()
  createReport() {
    return 'created';
  }

  // update report
  @Put(':id')
  updateReport() {
    return 'update report';
  }

  // delete report
  @Delete(':id')
  deleteReport() {
    return 'deleted ';
  }
}
