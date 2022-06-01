// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default interface ISchedule {
    timetableId: number;
    scheduleId: number;
    description: string;
    start: Date;
    end: Date;
    finished: boolean;
}
