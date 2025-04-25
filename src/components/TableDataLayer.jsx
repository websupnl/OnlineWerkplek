"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

const TableDataLayer = () => {
  useEffect(() => {
    let table;
    loadJQueryAndDataTables()
      .then(($) => {
        window.$ = window.jQuery = $;
        // Initialize DataTable
        table = $("#dataTable").DataTable({
          pageLength: 10,
        });
      })
      .catch((error) => {
        console.error("Error loading jQuery or DataTables:", error);
      });

    return () => {
      // Cleanup DataTable instance
      if (table) table.destroy(true);
    };
  }, []);
  return (
    <div className='card basic-data-table'>
      <div className='card-header'>
        <h5 className='card-title mb-0'>Default Data Tables</h5>
      </div>
      <div className='card-body'>
        <table
          className='table bordered-table mb-0'
          id='dataTable'
          data-page-length={10}
        >
          <thead>
            <tr>
              <th scope='col'>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>S.L</label>
                </div>
              </th>
              <th scope='col'>Invoice</th>
              <th scope='col'>Name</th>
              <th scope='col'>Issued Date</th>
              <th scope='col' className='dt-orderable-asc dt-orderable-desc'>
                Amount
              </th>
              <th scope='col'>Status</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>01</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526534
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list1.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Kathryn Murphy
                  </h6>
                </div>
              </td>
              <td>25 Jan 2024</td>
              <td>$200.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>02</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #696589
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list2.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Annette Black
                  </h6>
                </div>
              </td>
              <td>25 Jan 2024</td>
              <td>$200.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>03</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #256584
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list3.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Ronald Richards
                  </h6>
                </div>
              </td>
              <td>10 Feb 2024</td>
              <td>$200.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>04</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526587
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list4.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Eleanor Pena
                  </h6>
                </div>
              </td>
              <td>10 Feb 2024</td>
              <td>$150.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>05</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #105986
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list5.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Leslie Alexander
                  </h6>
                </div>
              </td>
              <td>15 March 2024</td>
              <td>$150.00</td>
              <td>
                {" "}
                <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Pending
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>06</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526589
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list6.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Albert Flores
                  </h6>
                </div>
              </td>
              <td>15 March 2024</td>
              <td>$150.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>07</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526520
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list7.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Jacob Jones
                  </h6>
                </div>
              </td>
              <td>27 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>08</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #256584
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list8.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Jerome Bell
                  </h6>
                </div>
              </td>
              <td>27 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Pending
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>09</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #200257
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list9.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Marvin McKinney
                  </h6>
                </div>
              </td>
              <td>30 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>10</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526525
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list10.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Cameron Williamson
                  </h6>
                </div>
              </td>
              <td>30 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>01</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526534
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list1.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Kathryn Murphy
                  </h6>
                </div>
              </td>
              <td>25 Jan 2024</td>
              <td>$200.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>02</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #696589
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list2.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Annette Black
                  </h6>
                </div>
              </td>
              <td>25 Jan 2024</td>
              <td>$200.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>03</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #256584
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list3.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Ronald Richards
                  </h6>
                </div>
              </td>
              <td>10 Feb 2024</td>
              <td>$200.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>04</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526587
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list4.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Eleanor Pena
                  </h6>
                </div>
              </td>
              <td>10 Feb 2024</td>
              <td>$150.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>05</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #105986
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list5.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Leslie Alexander
                  </h6>
                </div>
              </td>
              <td>15 March 2024</td>
              <td>$150.00</td>
              <td>
                {" "}
                <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Pending
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>06</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526589
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list6.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Albert Flores
                  </h6>
                </div>
              </td>
              <td>15 March 2024</td>
              <td>$150.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>07</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526520
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list7.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Jacob Jones
                  </h6>
                </div>
              </td>
              <td>27 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>08</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #256584
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list8.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Jerome Bell
                  </h6>
                </div>
              </td>
              <td>27 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Pending
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>09</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #200257
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list9.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Marvin McKinney
                  </h6>
                </div>
              </td>
              <td>30 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>10</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526525
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='assets/images/user-list/user-list10.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  />
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Cameron Williamson
                  </h6>
                </div>
              </td>
              <td>30 April 2024</td>
              <td>$250.00</td>
              <td>
                {" "}
                <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDataLayer;
