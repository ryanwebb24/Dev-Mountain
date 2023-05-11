
with open("python\CupcakeInvoices.csv") as invoice:
    group_total = 0
    for line in invoice.readlines():
        total = round(float(line.split(',')[3]) * float(line.split(',')[4]), 2)
        print(line.strip('\n').replace(',', ' | '))
        print(line.split(',')[2])
        print(f"Your order total is: {total}")
        group_total += total
    print(f"This is the group total: {round(group_total, 2)}")
    