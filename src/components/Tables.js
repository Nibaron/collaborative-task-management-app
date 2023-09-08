import {Table } from "flowbite-react";

export const Tables = () => {
  return (
    <Table>
                        <Table.Head>
                            <Table.HeadCell>Team 1</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Abir Raihan
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row className="bg-gray dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Ayon Das
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Sadia Ahmed
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
  )
}
