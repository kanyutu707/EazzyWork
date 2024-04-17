import sqlite3

def delete_all_tables(database_name):
    try:
        # Connect to the SQLite database
        conn = sqlite3.connect(database_name)
        cursor = conn.cursor()

        # Get a list of all tables in the database
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()

        # Drop each table one by one
        for table in tables:
            table_name = table[0]
            cursor.execute(f"DROP TABLE {table_name};")
            print(f"Table '{table_name}' deleted successfully.")

        # Commit the changes
        conn.commit()
        print("All tables deleted successfully.")

    except sqlite3.Error as e:
        print("Error deleting tables:", e)

    finally:
        # Close the database connection
        if conn:
            conn.close()

# Replace 'your_database_name.db' with the name of your SQLite database file
database_name = 'BASE_DIR.db'
delete_all_tables(database_name)
